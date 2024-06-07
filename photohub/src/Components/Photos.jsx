import React, { useState, useEffect } from 'react';
import { FaHeart, FaDownload, FaShare } from 'react-icons/fa';


const Photos = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const clientId = '?client_id=3VaJU0uPbvCt2nnktcgNI2MsowdFCI2hmRVexlaSIpA';
      const mainUrl = 'https://api.unsplash.com/photos/';
      try {
        const response = await fetch(`${mainUrl}${clientId}`);
        const data = await response.json();
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <main>
      <section className='photos'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          photos.map((photo) => (
            <article key={photo.id} className='photo'>
              <img src={photo.urls.regular} alt={photo.alt_description} />
              <div className='photo-info'>
                <h4>{photo.user.name}</h4>
                <button className='favourite-btn'>
                  <FaHeart />
                </button>
              </div>
              <div className='photo-actions'>
                <p>
                  <FaHeart className='heart-icon' /> {photo.likes}
                </p>
                <button className='share-btn'>
                  <FaShare />
                </button>
                <button className='download-btn'>
                  <FaDownload />
                </button>
              </div>
              <a href={photo.user.portfolio_url}>
                <img
                  src={photo.user.profile_image.medium}
                  className='user-img'
                  alt={photo.user.name}
                />
              </a>
            </article>
          ))
        )}
      </section>
    </main>
  );
};

export default Photos;
