import styled from '@emotion/styled';

export const Title = styled.h1`
    text-align: center;
    font-size: 44px;
    font-weight: 600;
    line-height: 100%;
    text-transform: uppercase;
    margin-bottom: 8px;
    background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Wrapper = styled.div`
    max-width: 900px;
    margin: 0 auto 96px auto;
    color: white;
    padding: 16px;
    margin-top: 32px;

    h1 {
        padding-bottom: 40px;
    }

    h2 {
        text-transform: uppercase;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
        padding-bottom: 24px;
    }

    li,
    p {
        font-size: 16px;
        line-height: 1.5;
        font-weight: 500;
        letter-spacing: normal;
        padding-bottom: 16px;
    }

    li {
        position: relative;
        padding-left: 22px;
    }

    li::before {
        content: '';
        position: absolute;
        top: 9px;
        left: 0;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
    }

    .site-main .main-cont a {
        position: relative;
        transition: all ease 0.5s;
        font-size: 16px;
        line-height: 1.5;
        font-weight: 500;
        letter-spacing: normal;
        color: #f70d29;
    }

    .site-main .main-cont a::before {
        content: '';
        transition: all ease 0.5s;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
    }

    .site-main .main-cont a:hover::before {
        width: 0;
    }
`;
