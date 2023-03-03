import me from "../assets/images/Print - Editado.png"
import Layout from '../layout/Layout';
import Title from "./Title";

const About = () => {
  return (
    <Layout>
    <section className='grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center gap-10' id="about">
        <div className='py-4 space-y-6 col-span-1 lg:col-span-2 text-center lg:text-left'>
            <Title title="About Me" />
            <p className="text-base md:text-lg">
            <strong className="">I'm a self taught front-end developer</strong> from Angola, 
            currently living in Lisbon, 🇵🇹. Adept at <strong className="">writing clean and reusable 
            code</strong>, bringing designs to live, and a firm believer of mobile first approach. 
            </p>
            <p className="text-base md:text-lg">
            Besides programming , I enjoy playing my favorite game Dead by Daylight, 
            watching movies and continuosly expanding my knowledge through 
            browsing the web. Feel free to reach out to talk about gaming, tech, 
            collab, or hire me.
            </p>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <img src={me} alt="Maria's icon" className="rounded-md" />
        </div>
    </section>
    </Layout>
  )
}

export default About;