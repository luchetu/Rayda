import React from 'react';
import Box from '@mui/material/Box';
import {
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Avatar,
    Divider,
    CircularProgress,
    Alert
} from '@mui/material';
import { useQuery } from 'react-query';

const Products = () => {

    // Fetcher function
    const getProducts = async () => {
        const res = await fetch('https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b');
        return res.json();
    };

    const postsQuery = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    })


    const getInitials = function (string) {
        var names = string.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    };

    if (postsQuery.isError) return <Alert severity="error">{postsQuery.error}</Alert>;
    if (postsQuery.isLoading) {
        return (<Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>)
    }

    return (
        <Card sx={{ display: "flex", flexDirection: "column", gap: "10px", p: "10px", borderRadius: "10px", border: "1px solid #EAECF0" }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: "start",
                    justifyContent: "space-between",
                    m: 2,
                }}>
                <Typography variant='text' sx={{ fontWeight: "bold" }}>
                    Featured Items
                </Typography>
                <Button variant="outlined"
                    sx={{
                        borderColor: "#D0D5DD",
                        color: "#344054"
                    }}
                >
                    View Action
                </Button>

            </Box>
            <Divider></Divider>
            <Box sx={{
                display: 'flex',
                alignItems: "start",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
            }}>
                {
                    postsQuery.data.data.map((product, index) => {
                        return (<Card sx={{ width: "293.5px", mb: 3, p: 2 }} key={index}>
                            <CardMedia
                                sx={{ width: "269.5px", backgroundColor: "#F2F4F7", height: 132 }}
                                image={product.image}
                                title="prod"
                            />
                            <CardContent>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <Avatar sx={{ bgcolor: "#F2F4F7", color: "#475467", fontSize: "14px" }}>{getInitials(product.name)}</Avatar>
                                        <Typography variant='text'>
                                            {product.name} <Box component="span" sx={{ fontWeight: "light", color: "grey" }}>(Highest Bidder)</Box>
                                        </Typography>
                                    </Box>
                                    <Typography variant='text' sx={{ fontWeight: "bold" }}>
                                        {product.title}
                                    </Typography>
                                    <Typography variant='text'>
                                        Current Bid <Box component="span" sx={{ fontWeight: "bold" }}>
                                            : {product.bid}
                                        </Box>
                                    </Typography>
                                    <Button variant="contained"
                                        sx={{
                                            borderColor: "#D0D5DD",
                                            color: "#ffff",
                                            backgroundColor: "#004CCC"
                                        }}
                                    >
                                        Add to WishList
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>)
                    })}

            </Box>
        </Card>
    )
}
export default Products
