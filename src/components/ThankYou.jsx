const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-2xl max-w-lg">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800 font-serif">
          Thank You
        </h1>
        <h1 className="text-xl font-extrabold mb-4 text-gray-800 font-serif">
          Trainers/Friends🤧
        </h1>
        <div className="text-xl font-semibold text-gray-700 space-y-2 font-cursive">
          <p>Navya</p>
          <p>Bipin</p>
          <p>Anirudha</p>
          <p>Nawaaz</p>
          <p>Priyanka</p>
          <p>Monica</p>
        </div>
        <p className="mt-6 text-lg text-gray-600 font-serif">
          Thank you for your valuable time in training us to become{" "}
          <span className="font-bold">Engineers</span>.<br />
          We will forever cherish the days spent with you all.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
