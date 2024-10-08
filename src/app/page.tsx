import Dashbord from "@/Components/DashBord/Dashbord";
import Slideshow from "@/Components/SlideShow/slideShow";
import Title from "@/Components/Title/Title";
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <>
      <Dashbord />
      <div className={styles.titleContainer}>
        <Title />
      </div>
      <div className={styles.phone}>
        <Slideshow />
      </div>
      <main>
        
      </main>
    </>
  );
}
