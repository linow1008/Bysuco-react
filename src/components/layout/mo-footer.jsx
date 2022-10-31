import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import Paper from "@mui/material/Paper";

const MoFooter = () => {
    const [value, setValue] = React.useState(0);
    return (
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} className="h-[4.375rem]" elevation={3}>
            <Box className="w-full">
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        label="홈"
                        icon={<HomeIcon sx={{ "& .Mui-selected": { color: "#006344", fontSize: ".5rem" } }} />}
                        sx={{
                            color: "#C1C1C1",
                            "&.Mui-selected": { color: "#006344", fontSize: ".5rem" },
                            "&	.MuiBottomNavigationAction-label": { fontSize: ".5rem", mt: ".3125rem" },
                        }}
                    />
                    <BottomNavigationAction
                        label="카테고리"
                        icon={<MenuIcon sx={{ "& .Mui-selected": { color: "#006344", fontSize: ".5rem" } }} />}
                        sx={{
                            color: "#C1C1C1",
                            "&.Mui-selected": { color: "#006344", fontSize: ".5rem" },
                            "&	.MuiBottomNavigationAction-label": { fontSize: ".5rem", mt: ".3125rem" },
                        }}
                    />
                    <BottomNavigationAction
                        label="마이페이지"
                        icon={
                            <PersonOutlineOutlinedIcon
                                sx={{ "& .Mui-selected": { color: "#006344", fontSize: ".5rem" } }}
                            />
                        }
                        sx={{
                            color: "#C1C1C1",
                            "&.Mui-selected": { color: "#006344", fontSize: ".5rem" },
                            "&	.MuiBottomNavigationAction-label": { fontSize: ".5rem", mt: ".3125rem" },
                        }}
                    />
                    <BottomNavigationAction
                        label="찜"
                        icon={
                            <FavoriteBorderOutlinedIcon
                                sx={{ "& .Mui-selected": { color: "#006344", fontSize: ".5rem" } }}
                            />
                        }
                        sx={{
                            color: "#C1C1C1",
                            "&.Mui-selected": { color: "#006344", fontSize: ".5rem" },
                            "&	.MuiBottomNavigationAction-label": { fontSize: ".5rem", mt: ".3125rem" },
                        }}
                    />
                    <BottomNavigationAction
                        label="최근 본 상품"
                        icon={<RestoreIcon sx={{ "& .Mui-selected": { color: "#006344", fontSize: ".5rem" } }} />}
                        sx={{
                            color: "#C1C1C1",
                            "&.Mui-selected": { color: "#006344", fontSize: ".5rem" },
                            "&	.MuiBottomNavigationAction-label": { fontSize: ".5rem", mt: ".3125rem" },
                        }}
                    />
                </BottomNavigation>
            </Box>
        </Paper>
    );
};

export default MoFooter;
