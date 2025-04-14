import ContactHero from '../components/contact/ContactHero';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import DepartmentContacts from '../components/contact/DepartmentContacts';

const ContactPage = () => {
  return (
    <div className="font-sans text-gray-800"> 
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <ContactMap />
      <DepartmentContacts />
    </div>
  );
};

export default ContactPage;