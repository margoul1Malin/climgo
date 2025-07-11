 const CarouselMarques: React.FC = () => {
  const images: { src: string; alt: string }[] = [
    { src: "/HeiwaLogo.png", alt: "Heiwa" },
    { src: "/DaikinLogo.png", alt: "Daikin" },
    { src: "/Mitsubishi-Electric-Logo.png", alt: "Mitsubishi Electric" },
  ];
  const [index, setIndex] = React.useState(0);
  const [prevIndex, setPrevIndex] = React.useState(0);
  const [isFading, setIsFading] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setPrevIndex((prev) => index);
        setIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsFading(false), 700); // durée du fondu
      }, 10);
    }, 5000); // 5 secondes par image
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    


      {/* Image précédente (fade out) */}
      


        
      


      {/* Image actuelle (fade in) */}
      


        
      


    


  );
