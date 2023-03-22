import React from 'react';
import { Typography, Card, CardMedia, Box, Button } from '@mui/material';
import banner from '../../images/banner.jpeg';
import prof from '../../images/prof.jpeg';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Banner = () => {
    return (
        <Box sx={{ width: "100%", height: "auto" }}>
            <Card sx={{
                display: "flex", flexDirection: "column", flexWrap: "wrap", p: 2, height: "auto", borderRadius: "10px", border: "1px solid #EAECF0"
            }}>
                <CardMedia
                    sx={{ height: 192, borderRadius: "10px" }}
                    image={banner}
                    title="banner"
                />
                <Box sx={{
                    display: 'flex',
                    alignItems: "start",
                    pl: 1,
                    pb: 1,
                    mt: 2,
                    justifyContent: "space-between",

                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: "start",
                        pl: 1,
                        pb: 1,
                        mt: 2,
                        justifyContent: "flex-start",
                        gap: "50px"

                    }}>
                        <CardMedia
                            sx={{
                                height: 144,
                                width: 144,
                                borderRadius: "50%",
                                p: 1,
                                position: "relative",
                                left: "20px",
                                bottom: "70px",
                            }}
                            image={prof}
                            title="banner"
                        />
                        <Box>
                            <Typography variant='text' sx={{ fontWeight: "bold" }}>
                                Starts in 3 days : 2 hours : 24 Minutes
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: "center",
                                pl: 1,
                                pb: 1,
                                mt: 2,
                                justifyContent: "flex-start",
                                gap: 1
                            }} >
                                <Button variant="text" sx={{ backgroundColor: "#FFFAEB", fontSize: "8px", color: "#F79009" }} startIcon={<FiberManualRecordIcon />}>
                                    Not Live
                                </Button>
                                <Typography variant='text' sx={{ fontWeight: "light", fontSize: "14px", color: "#475467" }}>
                                    Layers Action
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Button variant="outlined"
                        sx={{
                            borderColor: "#D0D5DD",
                            color: "#344054"
                        }}
                        startIcon={<ThumbUpOffAltIcon />}
                    >
                        Accept Invite
                    </Button>

                </Box>

            </Card >

        </Box >
    )
}
export default Banner;