import me from "../assets/images/mari.png"
import Layout from '../layout/Layout';
import Title from "./Title";

const About = () => {
  return (
    <Layout>
    <section className='grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center gap-10' id="about">
        <div className='py-4 space-y-6 col-span-1 lg:col-span-2 text-center lg:text-left'>
            <Title title="About Me" />
            <p className="text-base md:text-lg leading-relaxed">
            Hi, I'm Maria Tati. <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">I'm a self taught front-end developer</strong> from Angola, 
            currently living in Lisbon, Portugal. Adept at <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">writing clean and reusable 
            code</strong>, bringing designs to live, and a firm believer of mobile first approach. 
            </p>
            <p className="text-base md:text-lg  leading-relaxed">
            Besides programming , I enjoy playing my favorite game Dead by Daylight, 
            watching movies or streams and continuosly expanding my knowledge through 
            browsing the web. Feel free to reach out to talk about gaming, tech, 
            collab, or hire me.
            </p>
        </div>
        <div className="flex items-center justify-center">
          <img src={me} alt="Maria's photo front-end developer" className="rounded-md w-2/3 lg:w-full" />
        </div>
    </section>
    </Layout>
  )
}

export default About;