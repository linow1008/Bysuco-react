import { styled } from "twin.macro";
import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import shadows from "@mui/material/styles/shadows";
import { green } from "@mui/material/colors";
import StyledContent from "./StyledContent";

const StyledButton = styled.button`
    border: 1px solid;
    border-radius: 3px;
    margin: 15px;
    font-weight: 700;
    font-size: 12px;
    height: 30px;
    border-color: ${(props) => props.borderColor || "#d8d8d8"};
    color: ${(props) => props.color || "#d8d8d8"};
    width: ${(props) => props.width || "100px"};
`;

function button(props) {
    return <StyledButton color={props.color}>{props.name}</StyledButton>;
}
export default button;

// TAP
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

export function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: "background.paper" }}>
            <AppBar
                position="static"
                sx={{
                    bgcolor: "white",
                    boxShadow: 0,
                    borderBottom: 1,
                    borderColor: "#EDEDED",
                    color: "#D1D1D1",
                    "& .Mui-selected": { color: "#006655" },
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{ style: { background: "#006655" } }}
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="전체" {...a11yProps(0)} />
                    <Tab label="진행중" {...a11yProps(1)} />
                    <Tab label="종료" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <StyledContent title="타임세일A" subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다." />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <StyledContent title="타임세일A" subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다." />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <StyledContent title="타임세일A" subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다." />
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}
