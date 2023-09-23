import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { userData } from "../../data/userData";

export default function VisitorList() {
  const [Data, setData] = useState();

  return (
    <>
      <div className="cardBox">
        {userData.map((el, i) => (
          <Card sx={{ width: 220 }} key={i}>
            <CardMedia
              sx={{ height: 140 }}
              image={el.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.name}
              </Typography>
              <Typography
                fontWeight={700}
                variant="body2"
                color="text.secondary"
              >
                {el.location}
              </Typography>

              <Typography
                fontSize={"0.8rem"}
                variant="body2"
                color="text.secondary"
              >
                {el.date}
              </Typography>
              <Typography
                fontSize={"1rem"}
                variant="body2"
                color="text.secondary"
              >
                {el.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {el.contact}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
