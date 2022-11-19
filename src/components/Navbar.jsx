import { Button, Container, createStyles, Grid } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.1)',
  },

  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '5rem',
  },
}));

const Navbar = () => {
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <nav className={classes.navbar}>
        <div>Where in the world?</div>

        <div offset={4} span={2}>
          <Button>Dark Mode</Button>
        </div>
      </nav>
    </Container>
  );
};
export default Navbar;
