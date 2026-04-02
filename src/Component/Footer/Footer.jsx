const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer page-size sm:footer-horizontal  text-base-content p-10">
        <aside>
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#E6533C] italic ">
            Fitness
          </h1>
          <p className="text-white/50">
            We believe fitness should be accessible to everyone, everywhere,{" "}
            <br />
            regardless of income or access to a gym. With <br /> hundreds of
            professional workouts.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Get Started</h6>
          <a className="link link-hover">Service </a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Affiliate Program</a>
          <a className="link link-hover">About Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Fitness</a>
          <a className="link link-hover">Platform</a>
          <a className="link link-hover">Workout Libary</a>
          <a className="link link-hover">App Design</a>
        </nav>
      </footer>
      <div className="divider page-size "></div>
      <div className="text-center pb-8 mt-3 sm:mt-4 md:mt-5 lg:mt-6 ">
        <span className="text-lg text-white/50">
          All right reserved @Fitness 2024
        </span>
      </div>
    </div>
  );
};

export default Footer;
