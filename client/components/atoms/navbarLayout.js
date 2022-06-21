"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const icons_material_1 = require("@mui/icons-material");
const react_1 = require("react");
const drawerWidth = 240;
const Main = (0, styles_1.styled)('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => (Object.assign({ flexGrow: 1, padding: theme.spacing(3), transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }), marginLeft: `-${drawerWidth}px` }, (open && {
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
}))));
const AppBar = (0, styles_1.styled)(AppBar_1.default, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => (Object.assign({ transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }) }, (open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
}))));
const DrawerHeader = (0, styles_1.styled)('div')(({ theme }) => (Object.assign(Object.assign({ display: 'flex', alignItems: 'center', padding: theme.spacing(0, 1) }, theme.mixins.toolbar), { justifyContent: 'flex-end' })));
const NavbarLayout = (props) => {
    const theme = (0, styles_1.useTheme)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const { title, reactElement } = props, rest = __rest(props, ["title", "reactElement"]);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (<material_1.Box sx={{ display: 'flex' }}>
        <material_1.CssBaseline />
        <AppBar position="fixed" open={open}>
            <material_1.Toolbar>
            <material_1.IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={Object.assign({ mr: 2 }, (open && { display: 'none' }))}>
                <icons_material_1.Menu />
            </material_1.IconButton>
            <material_1.Typography variant="h6" noWrap component="div">
                {title}
            </material_1.Typography>
            </material_1.Toolbar>
        </AppBar>
        <material_1.Drawer sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }} variant="persistent" anchor="left" open={open}>
            <DrawerHeader>
            <material_1.IconButton onClick={handleDrawerClose} sx={{ my: 0 }}>
                {theme.direction === 'ltr' ? <><span>Todo Manager</span><icons_material_1.ChevronLeft /></> : <icons_material_1.ChevronRight />}
            </material_1.IconButton>
            </DrawerHeader>
            <material_1.Divider />
            <material_1.List>
              <material_1.ListItem key={"View todo"} disablePadding>
                <material_1.ListItemButton href={"/"}>
                    <material_1.ListItemIcon>
                    <icons_material_1.MoveToInbox />
                    </material_1.ListItemIcon>
                    <material_1.ListItemText primary={"View todo"}/>
                </material_1.ListItemButton>
              </material_1.ListItem>
              <material_1.ListItem key={"Create new"} disablePadding>
                <material_1.ListItemButton href={"/new"}>
                    <material_1.ListItemIcon>
                      <icons_material_1.Mail />
                    </material_1.ListItemIcon>
                    <material_1.ListItemText primary={"Create New"}/>
                </material_1.ListItemButton>
              </material_1.ListItem>
            </material_1.List>
        </material_1.Drawer>
        <Main open={open}>
            <DrawerHeader />
            {reactElement}
        </Main>
        </material_1.Box>);
};
exports.default = NavbarLayout;
