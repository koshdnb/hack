import { Layout } from '../../styled';
import {
  Wrapper,
  MapWrap,
  MapImage,
  MapLink,
  InfoWrap,
  TextWrap,
  GradientText,
  Date,
  Location,
} from './styled';

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
      <Layout>
        <MapWrap>
          <MapLink href={mapUrl}>
            <MapImage src="/images/map.png" alt="Map with address" />
          </MapLink>
          <InfoWrap>
            <TextWrap>
              <GradientText>Date</GradientText>
              <Date>JUNE 15-18, 2024</Date>
            </TextWrap>
            <TextWrap>
              <GradientText>Location</GradientText>
              <Location>The Warehouse by IT Quarter, Limassol, Cyprus</Location>
            </TextWrap>
          </InfoWrap>
        </MapWrap>
      </Layout>
    </Wrapper>
  );
};
