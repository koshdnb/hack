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

export const Map = () => {
  const googleMapsLink = 'https://maps.app.goo.gl/FBVtUBDnU98APXSS8';

  return (
    <Wrapper id="Venue">
      <Layout>
        <MapWrap>
          <MapLink href={googleMapsLink} target="_blank">
            <MapImage src="/images/map.png" alt="Map with address" />
          </MapLink>
          <InfoWrap>
            <TextWrap>
              <GradientText>Date</GradientText>
              <Date>JUNE 15-16, 2024</Date>
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
