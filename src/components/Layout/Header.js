import React from 'react'
import { Typography, Box, Divider } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Stack } from '@mui/system';

const Header = () => {
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }} >

                <Stack>
                    <Typography variant="title">
                        Welcome
                    </Typography>
                    <Typography variant='text' sx={{ fontWeight: "light", fontSize: '16px', lineHeight: "24px" }}>
                        Your current Sales Auction and Activities
                    </Typography>
                </Stack>

                <IconButton aria-label={"2"}>
                    <Badge badgeContent={2} color="error" anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}>
                        <NotificationsNoneIcon />
                    </Badge>
                </IconButton>
            </Box >
            <Divider></Divider>
        </Box>
    )
}
export default Header