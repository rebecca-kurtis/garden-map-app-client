const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const multerS3 = require("multer-s3-v2")
const {s3, getImageStream, deleteImage} = require("./s3.js")

const { Readable } = require('stream');   
const { ReadableStream } = require("web-streams-polyfill");

// load .env data into process.env
require("dotenv").config();
const dotenv = require("dotenv");
const db = require("../db/connection");


const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());


const storage = multerS3({
  s3: s3,
  bucket: process.env.AWS_BUCKET_NAME,
  metadata: function(req, file, cb) {
    cb(null, { originalname: file.originalname });
  },
  key: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  }
})

function checkFileType(file, cb){
  const filetypes = /jpeg|png|jpg/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if(mimetype && extname){
    return cb(null,true)
  } else {
    cb("Please upload images only")
  }
}

const upload = multer({ 
  storage: storage,
  // limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
}).any()


// Get all users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});


// Check if user owns plot
app.get("/checkUserRoute", (req, res) => {
  const plotID = req.query.plotID;
  const userID = req.query.userID;

  db.query(
    `
  SELECT CAST(
    EXISTS (
        SELECT 1
        FROM plots
        WHERE user_id = $1
          AND plot_id = $2
    ) AS BOOLEAN
  ) AS user_owns_plot;
  ;`,
    [userID, plotID],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    }
  );
});

// Login route
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    `SELECT user_id
    FROM users
    WHERE users.username = $1 
    AND users.password = $2
    GROUP BY user_id
    ;`,
    [username, password])
    .then((result) => {

      res.status(200).send(result.rows);
}).catch((error) => {
  if (error) {
    throw error;
  }
});

  
});

// Get all tips
app.get("/tips", (req, res) => {
  db.query("SELECT * FROM tips", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

// Get all plots/id
app.get("/plots/:id", (req, res) => {
  const plotId = req.params.id;
  const responseArr = [];

  db.query(
    `SELECT DISTINCT
    users.user_id AS user_id, 
    tips.tips_id AS tip_id, 
    users.first_name AS fName,
    users.last_name AS lName,
    users.description AS uDescription,
    tips.description AS tDescription,
    plantedPlants.plant_id AS ppPlantId
    FROM users
    JOIN plots on users.user_id = plots.user_id
    JOIN plantedPlants on plots.plot_id = plantedPlants.plot_id
    JOIN tips on users.user_id = tips.user_id
    WHERE plots.plot_id = $1
    AND tips.user_id = users.user_id 
    GROUP BY users.user_id, uDescription, ppPlantId, tDescription, tips.user_id, tips.tips_id
    ORDER BY user_id, tip_id;`,
    [plotId]
  ).then((response) => {
    responseArr.push({profileInfo: response.rows})
    const photosResponse =  db.query("SELECT * FROM photos WHERE plot_id = $1;",[plotId])
      return photosResponse;
    }).then((response) => {
        responseArr.push({photosInfo: response.rows})
        res.status(200).send(responseArr);
      })
      .catch((error) => {
        console.log('error:', error)
        if (error) {
          throw error;
        }
      });
});

// Get all plants
app.get("/plants", (req, res) => {
  db.query("SELECT * FROM plants", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

// Get all gardens
app.get("/gardens", (req, res) => {
  db.query("SELECT * FROM gardens", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

// Get all plots
app.get("/plots", (req, res) => {
  db.query("SELECT * FROM plots", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

// // Get all photos
// app.get("/photos/:id", (req, res) => {
//   let images = [];
//   const plotId = req.params.id;
//   console.log("id for photo", plotId);
//   db.query("SELECT * FROM photos WHERE plot_id = $1;",[plotId], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     console.log('Results:', results)
//     res.status(200).send(results.rows);
//   });
// });

app.get("/photos/:image_key", (req, res) => {
  const readStream = getImageStream(req.params.image_key)

  // console.log('readStream', readStream);
  // console.log('res', res);
  
  // const readableStream = readStream.Body.transformToWebStream()
  // readableStream.pipeTo()
  // readStream.pipe(res)
})

// Upload photos

function saveImagesInDB(images, plot_id){

  const savedPhotos = [];
  for(let i = 0;i < images.length;i++){

    db.query("INSERT INTO photos (plot_id, image_key, garden_id) VALUES($1, $2, $3)", 
    [plot_id,images[i].key, 1])
  }
    newTips = db.query(
      "SELECT * FROM photos WHERE plot_id = $1;",[plot_id],
    );
    return newTips;
  
}

app.post("/uploadPhoto/:plotID", (req, res) => {
  const plotId = req.params.plotID;

  upload(req, res, (err) => {
    if(!err && req.files != "") { 
      saveImagesInDB(req.files, plotId)
      .then((response) => {
        // console.log("saved resp", response)
        res.status(200).send(response.rows);
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
    } else if (!err && req.files == ""){
      res.statusMessage = "Please select an image to upload";
      res.status(400).end()
    } else { 
      res.statusMessage = (err === "Please upload images only" ? err : "Photo exceeds limit of 1MB") ;
      res.status(400).end()
    }
  })  
})


// Delete photos
function deleteImagesFromS3(key){

  deleteImage(key)


  // for(let i = 0; i < images.length;i++){
  //   deleteImage(images)
  // }
}

function deleteImagesFromDb(key, plot_id){

  db.query("DELETE FROM photos WHERE plot_id = $1 AND image_key = $2", [plot_id, key], (err, result) => {
    if(err) throw new Error(err)
  })


  // console.log("in db func", images)
  // for(let i = 0; i < images.length;i++){
  //   // console.log('images[', images)
  //   db.query("DELETE FROM photos WHERE plot_id = $1 AND image_key = $2", [plot_id, images], (err, result) => {
  //     if(err) throw new Error(err)
  //   })
  // }
}

app.post("/deletePhoto/:plotID", (req, res) => {
  let images = [];
  // db.query("SELECT * FROM photos", (error, results) => {
  //   if (error) {
  //     throw error;
  //   }
  //   // console.log('Results:', results)
  //   res.status(200).send(results.rows);
  // });
  const plotId = req.params.plotID;
  const deleteImages = req.body.deleteImages
  console.log("dlete", deleteImages);

  if(deleteImages == ""){
    res.statusMessage = "Please select an image to delete";
    res.status(400).end()
  } else {
    deleteImagesFromS3(deleteImages)
    deleteImagesFromDb(deleteImages, plotId)
    res.statusMessage = "Succesfully deleted";
    res.status(200).end()
  }
});

// Get all plantedPlants
app.get("/plantedPlants", (req, res) => {
  db.query("SELECT * FROM plantedPlants", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

//update About Section "/updateAbout"
app.post("/updateAbout", (req, res) => {
  const userID = req.body.userID;
  const description = req.body.description;

  db.query(
    `
  UPDATE users
  SET description = $1
  WHERE user_id = $2
  ;`,
    [description, userID],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    }
  );
});

//update HeroHeader Section Name "/updateName"
app.post("/updateName", (req, res) => {
  const userID = req.body.userID;
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;

  db.query(
    `
  UPDATE users
  SET first_name = $1, last_name = $2
  WHERE user_id = $3
  ;`,
    [firstName, lastName, userID],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    }
  );
});

//add new tip to database
app.post("/addTip", (req, res) => {

  const userID = req.body.userID;
  let tipDescription = req.body.description;

  db.query(
    `
 INSERT INTO tips (user_id, description)
 VALUES ($1, $2)
  ;`,
    [userID, tipDescription]
  )
    .then(() => {
      newTips = db.query(
        `
    SELECT DISTINCT
    tips.tips_id AS tip_id,
    tips.description AS tDescription
    FROM tips
    WHERE tips.user_id = $1
    ;`,
        [userID]
      );
      return newTips;
    })
    .then((results) => {
      res.status(200).send(results.rows);
    })
    .catch((error) => {
      if (error) {
        throw error;
      }
    });
});

//update Tips Section "/updateTips"
app.post("/updateTips", (req, res) => {
  let tipId = "";
  let tipDescription = "";

  for (let tip in req.body) {
    tipId = tip;
    tipDescription = req.body[tip];
  }

  db.query(
    `
  UPDATE tips
  SET description = $1
  WHERE tips_id = $2
  ;`,
    [tipDescription, tipId],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    }
  );
});

//delete Tip
app.post("/deleteTip", (req, res) => {
  let deleteValue = req.body.deleteValue;
  const userID = req.body.userID;

  db.query(
    `
  DELETE FROM tips
  WHERE tips_id = $1
  ;`,
    [deleteValue]
  )
    .then(() => {
      newTips = db.query(
        `
    SELECT DISTINCT
    tips.tips_id AS tip_id,
    tips.description AS tDescription
    FROM tips
    WHERE tips.user_id = $1
    ;`,
        [userID]
      );
      return newTips;
    })
    .then((results) => {
      res.status(200).send(results.rows);
    })
    .catch((error) => {
      if (error) {
        throw error;
      }
    });
});

//delete plantedPlants item
app.post("/deletePlantedPlant", (req, res) => {
  let deleteValue = req.body.deleteValue;
  const plotID = req.body.plotID;

  db.query(
    `
  DELETE FROM plantedPlants
  WHERE plantedPlants_id = $1
  ;`,
    [deleteValue]
  )
    .then(() => {
      allPlantedPlants = db.query(
        `
    SELECT *
    FROM plantedPlants
    WHERE plantedPlants.plot_id = $1
    ;`,
        [plotID]
      );
      return allPlantedPlants;
    })
    .then((results) => {
      res.status(200).send(results.rows);
    })
    .catch((error) => {
      if (error) {
        throw error;
      }
    });
});

//add new Planted Plant item with already created plants
app.post("/addPlant", (req, res) => {
  const plantName = req.body.name;
  const plotID = req.body.plotID;

  db.query(
    `
  SELECT plant_id
  FROM plants
  WHERE name = $1
  ;`,
    [plantName]
  )
    .then((response) => {
      const plantID = response.rows[0].plant_id;
      return db.query(
        `
    INSERT INTO plantedPlants (plot_id, plant_id)
    VALUES ($1, $2)
    ;`,
        [plotID, plantID]
      );
    })
    .then((results) => {
      allPlantedPlants = db.query(
        `
    SELECT *
    FROM plantedPlants
    WHERE plantedPlants.plot_id = $1
    ;`,
        [plotID]
      );
      return allPlantedPlants;
    })
    .then((results) => {
      res.status(200).send(results.rows);
    })
    .catch((error) => {
      if (error) {
        throw error;
      }
    });
});

//create new plant and add to plantedPants
app.post("/createPlant", (req, res) => {
  const plantName = req.body.name;
  const plotID = req.body.plotID;

  db.query(
    `
  INSERT INTO plants (name)
    VALUES ($1)
    RETURNING plant_id
  ;`,
    [plantName]
  )
    .then((response) => {
      const plantID = response.rows[0].plant_id;
      return db.query(
        `
    INSERT INTO plantedPlants (plot_id, plant_id)
    VALUES ($1, $2)
    RETURNING plantedPlants_id
    ;`,
        [plotID, plantID]
      );
    })
    .then((results) => {
      allPlantedPlants = db.query(
        `
    SELECT *
    FROM plantedPlants
    WHERE plantedPlants.plot_id = $1
    ;`,
        [plotID]
      );
      return allPlantedPlants;
    })
    .then((results) => {
      res.status(200).send(results.rows);
    })
    .catch((error) => {
      if (error) {
        throw error;
      }
    });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
