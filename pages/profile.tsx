import { MainLayout } from '../components/layout/MainLayout';
import styled from 'styled-components';
import { useFetchUser } from '../utils/user';
import Router from 'next/router';

const StyledProfile = styled.div`
  padding: 50px 10px;
  text-align: center;
  h1 {
    font-size: 60px;
  }
  img{
    height:100px;
    width: 100px;
  }
`;

export default function Profile() {
  const { user, loading } = useFetchUser();

  if (loading) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  if (!user && !loading) {
    Router.replace('/');
  }

  return (
    <MainLayout>
      <StyledProfile>
        <img src={JSON.stringify(user.picture).substring(1, JSON.stringify(user.picture).length -1)} ></img>
        <p>Welcome to your Profile Page {JSON.stringify(user.given_name).substring(1, JSON.stringify(user.given_name).length -1)} {JSON.stringify(user.family_name).substring(1, JSON.stringify(user.family_name).length -1)}!</p>
      </StyledProfile>
    </MainLayout>
  );
}
