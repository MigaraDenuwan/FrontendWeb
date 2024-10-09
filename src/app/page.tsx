import Dashbord from "@/Components/DashBord/Dashbord";
import Slideshow from "@/Components/SlideShow/slideShow";
import Title from "@/Components/Title/Title";
import styles from '@/app/page.module.css';
import FormComponent from "@/Components/FormComponent/FormComponent";

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
      <div className={styles.form}>
      <FormComponent />
      </div>
      <main>
      
      </main>
    </>
  );
}
