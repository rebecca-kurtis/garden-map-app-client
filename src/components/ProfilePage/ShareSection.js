import styles from "../styles/ProfilePage/ShareSection.module.css";

//import icons
import TwitterIcon from "../images/🦆 icon _twitter_.png";
import FacebookIcon from "../images/🦆 icon _facebook_.png";
import LinkIcon from "../images/🦆 icon _share alt_.png";
import ShareIcon from "../images/🦆 icon _share_.png";


export default function ShareSection() {

  async function copyPageUrl() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      console.log('Page URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  async function shareToDevice() {

    if (navigator.share) {
      navigator.share({
        title: 'web.dev',
        text: 'Check out web.dev.',
        url: 'https://web.dev/',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }

  return (
    <div className={styles.shareSectionContainer}>
      <h3>Share this plot with your friends and family!</h3>
      <div className={styles.iconShareContainer}>
      <a href="https://twitter.com/intent/tweet?text=YOUR_TITLE&url=YOUR_URL" target="blank" title="twitter"><img src={TwitterIcon} alt="twitter"></img></a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL" target="blank" title="facebook"><img src={FacebookIcon} alt="facebook"></img></a>
        <button className={styles.linkButton} onClick={copyPageUrl}><img src={LinkIcon} alt="link"></img></button>
         <button className={styles.linkButton} onClick={shareToDevice}><img src={ShareIcon} alt="share"></img></button>
      </div>
  
    </div>
  );
}