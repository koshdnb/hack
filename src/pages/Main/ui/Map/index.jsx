import { Wrapper, Container } from './styled';

const API_KEY = 'AIzaSyCrNgAYgwuUBeS725qoTMFUgl9LgzFAEAU';
const MODE = 'place';

export const Map = () => {
  const mapParams = {
    zoom: 12,
    q: 'place_id:ChIJo0-uKPYz5xQR2X5ielXSSp4',
  };

  const paramsQuery = new URLSearchParams({ key: API_KEY, ...mapParams });
  const mapUrl = `https://www.google.com/maps/embed/v1/${MODE}?key=${API_KEY}&${paramsQuery}`;

  return (
    <Wrapper id="Venue">
      <Container
        src={mapUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    </Wrapper>
  );
};
