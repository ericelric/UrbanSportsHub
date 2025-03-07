import './VenuesPage.css';

const VenuesPage = () => {
  return (
    <>
      <h1 className="venues__headline">Disclaimer</h1>
      <div className="venues">
        <p>
          This project is for educational and demonstration purposes only. It is
          intended to showcase a security vulnerability in the Urban Sports Club
          check-in process. It should not be used for fraudulent activities.
        </p>
        <a href="https://github.com/ericelric/UrbanSportsHub">
          Read more on GitHub
        </a>
      </div>
    </>
  );
};

export default VenuesPage;
