import PropTypes from "prop-types";

const Video = ({ url, title }) => {
  return (
    <div className="aspect-video max-h-[18rem] max-w-[32rem] w-full">
      {url ? (
        <iframe
          title={`Trailer for ${title}`}
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      ) : (
        <div className="w-full h-full">
          <p className="text-center">
            The trailer is not available at the moment. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Video;
