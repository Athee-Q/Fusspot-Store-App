const About = () => {
    return (
      <section id="about" className="py-16">
        <div className="container mx-auto px-16 pt-[15vh]">
          <h2 className="text-4xl font-bold text-primary mb-8">Welcome to FusspoT!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-bold tracking-wider text-lg">
                  FusspoT!
                </span>{" "}
                is your premier destination for fresh, flavorful, and nutritious juices. Our mission is to provide you with an exceptional juicing experience that revitalizes your body and invigorates your senses.
              </p>
              <p className="text-lg leading-relaxed">
                At FusspoT!, we take pride in our commitment to quality, diversity, and sustainability. With a focus on using the finest ingredients, offering a diverse selection of blends, and promoting environmental responsibility, we strive to exceed your expectations with every sip.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">What Sets Us Apart?</h3>
              <ul className="list-disc list-inside">
                <li className="text-lg leading-relaxed mb-2">
                  <strong>Quality Ingredients:</strong> We source the freshest, highest quality ingredients to ensure that each juice is packed with natural goodness and flavor.
                </li>
                <li className="text-lg leading-relaxed mb-2">
                  <strong>Diverse Selection:</strong> Explore our extensive range of juice blends, carefully crafted to cater to all taste preferences and dietary needs.
                </li>
                <li className="text-lg leading-relaxed mb-2">
                  <strong>Health and Wellness:</strong> Our juices are enriched with essential vitamins, minerals, and antioxidants, promoting overall well-being and vitality.
                </li>
                <li className="text-lg leading-relaxed mb-2">
                  <strong>Sustainability:</strong> Committed to environmental stewardship, we use eco-friendly packaging and sustainable practices to minimize our ecological footprint.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-lg leading-relaxed mt-12">
            Join us on a journey of flavor and wellness. Experience the joy of fresh, nourishing juices at FusspoT!
          </p>
        </div>
      </section>
    );
  };
  
  export default About;
  