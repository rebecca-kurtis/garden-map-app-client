import styles from "../styles/ProfilePage/TipsSection.module.css";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom"
import getAllTips from "../../helpers/getAllTips";
import { TailSpin } from 'react-loader-spinner';


export default function TipsSection() {

  const [profileInfo, setProfileInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const id = useParams();
  console.log('id', id.id)
  const plot_id = id.id

  useEffect(() => {

    // getPlotProfileInfo(plot_id)
    getAllTips()
    .then((data) => {
      setProfileInfo(data);
      console.log('data from inside', data)
      setLoading(false);
      // console.log('users from inside', users)
    });

   

  },[] );
  if (isLoading) {
    return (
      <div className="">
        <div  className={styles.loadingContainer}>
      <TailSpin
      // type="ThreeDots"
      color="#000"
      height={100}
      width={100}
       //3 secs
    />
    </div>
        </div>
    )
  } else {
    return (
    <div className={styles.tipsSectionContainer}>
      <h2>Tips:</h2>
      <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</p>
    </div>
  );
    }
}