import { Drawer } from "@mui/material";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: any;
}

export default function CartDrawer(props: DrawerProps) {
  return (
    <>
      <Drawer
        open={props.isOpen}
        onClose={() => props.setIsOpen(!props.isOpen)}
        anchor="right"
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: 350,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 350,
            boxSizing: "border-box",
          },
        }}
      >
        Drawer
      </Drawer>
    </>
  );
}
