import React from 'react'
import "./Cards.modules.css";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

/* icon */
import { GiHastyGrave } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

/* redux */
import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";

const Cards : React.FC = () => {
    const daily = useSelector(selectDaily);

    return (
        <div className="container">
            <Grid container spacing={1} justify="center">
                <Grid item xs={12} md={3} component={Card} className="infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <MdLocalHospital />
                            Infected persons
                        </Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={daily[daily.length - 1].Confirmed}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
