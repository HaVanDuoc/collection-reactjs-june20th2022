import { Box, Container, Stack, styled } from '@mui/material';
import { Feed, Navbar, Rightbar, Sidebar } from '../components';

const ContentPage = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
}));

const DefaultLayout = ({ children }) => {
    return (
        <Box>
            <Navbar />

            <Stack>
                <Container>
                    <ContentPage>
                        <Sidebar />
                        <Feed />
                        <Rightbar />
                    </ContentPage>
                </Container>
            </Stack>
        </Box>
    );
};

export default DefaultLayout;
