import Dashbord from "@/Components/DashBord/Dashbord";
import Slideshow from "@/Components/SlideShow/slideShow";
import Title from "@/Components/Title/Title";
import styles from '@/app/page.module.css';
import FormComponent from "@/Components/FormComponent/FormComponent";
import ContactUs from "@/Components/Contact/ContactUs";

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
      <div className={styles.contact}>
        <ContactUs />
      </div>
      <main>
        
      </main>
      <div style={{ height: '500vh' }}></div>
    </>
  );
}
