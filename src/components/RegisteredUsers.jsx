import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

function RegisteredUsers(props) {

    const { users } = props;
    return (
        <Box>
            {
                users.length !== 0
                    ? <Grid container spacing={1}>
                        {
                            users.map((user, index) => {
                                return <Grid key={index} item xs={12} md={6}>
                                    <Paper variant="outlined" sx={{ p: 1 }}>
                                        <Typography variant="h6">Name: {user.name}</Typography>
                                        <Divider />
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography>Gender: {user.sex}</Typography>
                                            <Typography>Birthday: {JSON.parse(JSON.stringify(user.birthDate)).slice(0, 10)}</Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography>Mobile: {user.mobile}</Typography>
                                            <Typography>ID: {user.identity.type} | {user.identity.number}</Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography>Guardian: {user.guardian.prefix}{user.guardian.name}</Typography>
                                            <Typography>Email: {user.email}</Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography>Address: {user.address}, {user.city}, {user.state}</Typography>
                                            <Typography>Country: {user.country} | {user.pincode}</Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography>Occupation: {user.occupation}</Typography>
                                            <Typography>Emergency Contact: {user.emergencyMobile}</Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography>Religion: {user.religion}</Typography>
                                            <Typography>Marital Status: {user.maritalStatus}</Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Typography>Blood Group: {user.bloodGroup}</Typography>
                                            <Typography>Nationality: {user.nationality}</Typography>
                                        </Stack>
                                    </Paper>
                                </Grid>
                            })
                        }
                    </Grid>
                    : null
            }
        </Box>
    )
}

export default RegisteredUsers;