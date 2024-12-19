"use client";

import { Box, Button, Card, Divider, Grid, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from "next/image";
import codingImage from './assets/a-man-coding.jpeg';
import JsImage from './assets/js.png';
import TsImage from './assets/typescript-2.png';
import ReactImage from './assets/atom.png';
import NodeImage from './assets/node-js.png';
import NextImage from './assets/next.png';
import FBImage from './assets/facebook.png';
import IGImage from './assets/social.png';
// import PhoneImage from './assets/phone.png';
// import MailImage from './assets/mail.png';
import SolutionImage from './assets/solution.jpg'
import UiUxImage from './assets/ui-ux.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import MacBook from './assets/mac_no_background.png';
import Link from "next/link";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@mui/material/styles";

const cards = [
  { id: 1, image: codingImage, title: "โค้ดคุณภาพ สร้างสรรค์เว็บไซต์ที่มั่นคง", subTitle: "ระบบหลังบ้านที่แข็งแกร่ง ตอบสนองได้รวดเร็ว" },
  { id: 2, image: UiUxImage, title: "Website หรือ Mobile App ที่ใช้งานง่าย", subTitle: "ออกแบบมาเพื่อมอบประสบการณ์ที่ดีที่สุดแก่ผู้ใช้งาน" },
  { id: 3, image: SolutionImage, title: "โซลูชันที่ปรับแต่งได้", subTitle: "เราสร้างสรรค์เว็บไซต์ที่ตอบโจทย์คุณโดยเฉพาะ" },
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isDayMode, setIsDayMode] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleTheme = () => {
    setIsDayMode(!isDayMode);
    const root = document.documentElement;
    if (!isDayMode) {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#171717");
    } else {
      root.style.setProperty("--background", "#1b1b1b");
      root.style.setProperty("--foreground", "#ededed");
    }
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ bgcolor: "#000000" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "Noto Sans" }}>
              Let Me Dev
            </Typography>

            {isMobile ? (
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={2}
              >
                <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 1 }}>
                  {isDayMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <IconButton
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{
                    "& .MuiPaper-root": {
                      bgcolor: isDayMode ? "#ffffff" : "#333333",
                      color: isDayMode ? "#000000" : "#ffffff",
                      border: isDayMode ? "1px solid #e0e0e0" : "1px solid #444444",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose} component="a" href="#aboutUs">
                    เกี่ยวกับเรา
                  </MenuItem>
                  <Divider
                    sx={{
                      bgcolor: isDayMode ? "#e0e0e0" : "#444444",
                    }}
                  />
                  <MenuItem onClick={handleClose} component="a" href="#contact">
                    ติดต่อเรา
                  </MenuItem>
                </Menu>
              </Stack>
            ) : (
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={2}
              >
                <Button
                  size="medium"
                  style={{
                    fontFamily: "Noto Sans Thai",
                    fontSize: 18,
                    color: "#fff",
                  }}
                  href="#aboutUs"
                >
                  เกี่ยวกับเรา
                </Button>
                <Button
                  size="medium"
                  style={{
                    fontFamily: "Noto Sans Thai",
                    fontSize: 18,
                    color: "#fff",
                  }}
                  href="#contact"
                >
                  ติดต่อเรา
                </Button>
                <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 1 }}>
                  {isDayMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: 12
        }}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{ fontFamily: "Noto Sans", fontWeight: 600 }}
        >
          LET ME DEV
        </Typography>

        <Typography
          textAlign={"center"}
          sx={{ fontFamily: "Noto Sans Thai", fontSize: 30, mt: 2 }}
        >
          ให้เราช่วยสร้างอนาคตให้คุณ
        </Typography>

        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ mt: 4 }}
        >
          <Button
            variant="contained"
            size="small"
            style={{
              fontFamily: "Noto Sans Thai",
              fontSize: 18,
            }}
            href={"#contact"}
          >
            ติดต่อเรา
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          p: { xs: 2, sm: 4, md: 10 },
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000 }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Card
                sx={{
                  backgroundColor: "#000",
                  borderRadius: 3,
                  color: "#fff",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-around",
                    alignItems: "center",
                    p: { xs: 2, sm: 5 },
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 1, sm: 2 },
                      textAlign: "center",
                      width: 300, // Set consistent width for the container
                      height: 300, // Set consistent height for the container
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      style={{
                        borderRadius: 10,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Ensures the image fills the container without distortion
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      mt: { xs: 2, sm: 0 },
                      ml: { xs: 0, sm: 4 },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    <Typography sx={{ fontFamily: "Noto Sans Thai", fontSize: 20 }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ fontFamily: "Noto Sans Thai", fontSize: 18, mt: 1 }}>
                      {card.subTitle}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box
        style={{
          backgroundColor: "#000000",
          color: "#fff",
          marginTop: 50
        }}
        id={"aboutUs"}
      >
        <Box sx={{ p: 4 }}>
          <Typography sx={{ fontFamily: "Noto Sans Thai", fontSize: 25, textAlign: "center", mt: 4 }}>

            เราพัฒนาทั้ง Website และ Mobile Application
          </Typography>
          <Typography sx={{ fontFamily: "Noto Sans Thai", fontSize: 25, textAlign: "center", mt: 0.5 }}>

            ด้วยเทคโนโลยีและเครื่องมือที่ล้ำสมัย
          </Typography>
          <Typography sx={{ fontFamily: "Noto Sans Thai", fontSize: 25, textAlign: "center", mt: 0.5 }}>

            เพื่อเพิ่มสปีดให้โปรเจกต์ของคุณโดยเฉพาะ
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 10, p: 2 }}>
          <Image
            src={MacBook}
            alt="A man coding"
            width={400}
            height={200}
            style={{ borderRadius: 10 }}
          />
        </Box>

        <Box sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "600px", textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "Noto Sans Thai",

                  fontSize: 25,
                  mb: 6,
                  textAlign: "center",
                }}
              >
                เทคโนโลยีที่เราใช้
              </Typography>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ width: "100%", margin: "0 auto" }} // Ensures proper centering
              >
                <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={JsImage}
                    alt="Js"
                    width={70}
                    height={70}
                    style={{ borderRadius: 10 }}
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={TsImage}
                    alt="Ts"
                    width={70}
                    height={70}
                    style={{ borderRadius: 10 }}
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={NodeImage}
                    alt="Js"
                    width={70}
                    height={70}
                    style={{ borderRadius: 10 }}
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "100%",
                      width: 70,
                      height: 70,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={NextImage}
                      alt="Js"
                      width={70}
                      height={70}
                      style={{ borderRadius: 10 }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={ReactImage}
                    alt="Js"
                    width={70}
                    height={70}
                    style={{ borderRadius: 10 }}
                  />
                </Grid>
              </Grid>
              <Typography
                sx={{
                  fontFamily: "Noto Sans Thai",

                  fontSize: 20,
                  mt: 6,
                  textAlign: "center",
                }}
              >
                เทคโนโลยีที่ทรงพลัง รวดเร็ว และยืดหยุ่น
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ p: 4 }} id="contact">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "80%", maxWidth: "600px" }}>
              <Typography
                sx={{ fontFamily: "Noto Sans Thai", fontSize: 25, mb: 4 }}

              >
                ติดต่อเรา
              </Typography>
              <Grid container spacing={3} sx={{ pb: 5 }}>
                <Grid item xs={12} sm={6}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Link href={`${process.env.NEXT_PUBLIC_FACEBOOK_LINK}`} target="_blank">
                        <Image
                          src={FBImage}
                          alt="Js"
                          width={40}
                          height={40}
                          style={{ borderRadius: 10 }}
                        />
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href={`${process.env.NEXT_PUBLIC_FACEBOOK_LINK}`} target="_blank">
                        <Typography
                          sx={{ fontFamily: "Noto Sans Thai", fontSize: 22 }}

                        >
                          Let Me Dev
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Link href={`${process.env.NEXT_PUBLIC_INSTAGRAM_LINK}`} target="_blank">
                        <Image
                          src={IGImage}
                          alt="Js"
                          width={40}
                          height={40}
                          style={{ borderRadius: 10 }}
                        />
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href={`${process.env.NEXT_PUBLIC_INSTAGRAM_LINK}`} target="_blank">
                        <Typography
                          sx={{ fontFamily: "Noto Sans Thai", fontSize: 22 }}

                        >
                          letme_dev
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ pb: 5 }}>
                {/* <Grid item xs={12} sm={6}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Image
                        src={PhoneImage}
                        alt="Js"
                        width={40}
                        height={40}
                        style={{ borderRadius: 10 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{ fontFamily: "Noto Sans Thai", fontSize: 22 }}
                      >
                        010-0232323
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid> */}

                {/* <Grid item xs={12} sm={6}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Image
                        src={MailImage}
                        alt="Js"
                        width={40}
                        height={40}
                        style={{ borderRadius: 10 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{ fontFamily: "Noto Sans Thai", fontSize: 22 }}
                      >
                        test23@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid> */}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ p: 6 }}>
        <Typography sx={{ fontFamily: "Noto Sans", fontSize: 22, textAlign: "center" }}>
          Office at 14, village no.7, Promlok sub-district, Promkiri district,
        </Typography>
        <Typography sx={{ fontFamily: "Noto Sans", fontSize: 22, textAlign: "center" }}>
          Nakhon Si Thammarat, 80320
        </Typography>

        <Typography
          sx={{
            fontFamily: "Noto Sans",
            fontSize: 18,
            textAlign: "center",
            mt: 4,
            py: 2,
            color: "gray",
            borderTop: "1px solid #e0e0e0",
            borderRadius: "0 0 8px 8px",
            boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
          }}
        >
          © 2024 Let Me Dev. All Rights Reserved. <br />
          Fonts used: <a href="https://fonts.google.com/specimen/Noto+Sans" target="_blank" rel="noopener noreferrer">Noto Sans</a> by Google Fonts.
        </Typography>
      </Box>
    </Box >
  );
}
