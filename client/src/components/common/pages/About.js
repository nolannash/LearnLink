import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const members = [
    {
      name: 'Derrick Cleavall',
      title: 'Frontend Developer',
      lives: 'Denver',
      image: '',
    },
    {
      name: 'Aydan Rivera',
      title: 'UI/UX Designer',
      lives: 'Phoenix',
      image: '',
    },
    {
      name: 'Cody Roberts',
      title: 'Backend Developer',
      lives: 'Denver',
      image: '',
    },
    {
      name: 'Nolan Nash',
      title: 'Backend Developer',
      lives: 'n/a',
      image: '',
    },
    {
      name: 'Angela Palaszewski',
      title: 'Frontend Developer',
      lives: 'n/a',
      image: '',
    },
    // ... (other team members)
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    showStatus: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 py-10">
      <div className="max-w-xl mx-auto bg-gray-900 rounded-lg text-white p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Meet the Team</h1>
        <div className="w-full relative">
          <Slider {...sliderSettings}>
            {members.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg text-white p-4">
                <div className="mt-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-24 h-24 object-cover mx-auto"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-semibold text-gray-300 mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-center">{member.lives}</p>
                  <div className="text-lg font-semibold mb-4 text-gray-300"></div>
                  <div className="bg-gray-700 p-4 rounded-md shadow-md text-center">
                    <p className="italic text-gray-400 mb-2">{member.title}</p>
                    <p className="italic text-gray-400">Thanks for stopping by 🤙🏼</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default About;
