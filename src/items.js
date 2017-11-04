let items = {
    vase1: {
        id: 1,
        imagePath: "assets/vase1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 100,
        bonus: 0.5,
        size: [1, 1],
        tier: 1,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/vase1-1.png', offset: {top: -182, left: 142}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/vase1-2.png', offset: {top: -192, left: 149}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/vase1-3.png', offset: {top: -188, left: 143}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/vase1-4.png', offset: {top: -192, left: 149}},
        },
    },
    vase2: {
        id: 2,
        Path: "assets/vase2-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 100,
        bonus: 0.5,
        size: [1, 1],
        tier: 5,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/vase2-1.png', offset: {top: -222, left: 172}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/vase2-2.png', offset: {top: -222, left: 177}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/vase2-3.png', offset: {top: -222, left: 172}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/vase2-4.png', offset: {top: -222, left: 177}},
        },
    },
    closet1: {
        id: 3,
        imagePath: "assets/closet1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 1000,
        bonus: 1,
        size: [1, 2],
        tier: 1,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/closet1-1.png', offset: {top: -492, left: 80}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/closet1-2.png', offset: {top: -496, left: -81}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/closet1-3.png', offset: {top: -519, left: 74}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/closet1-4.png', offset: {top: -521, left: -81}},
        }
    },
    small_closet1: {
        id: 4,
        imagePath: "assets/small_closet1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 500,
        bonus: 0.5,
        size: [1, 1],
        tier: 2,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/small_closet1-1.png', offset: {top: -265, left: 90}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/small_closet1-2.png', offset: {top: -265, left: 66}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/small_closet1-3.png', offset: {top: -265, left: 90}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/small_closet1-4.png', offset: {top: -265, left: 66}},
        }
    },
    couch_blue1: {
        id: 5,
        imagePath: "assets/couch_blue1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 1500,
        bonus: 1.5,
        size: [3, 1],
        tier: 2,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/couch_blue1-1.png', offset: {top: -231, left: -143}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/couch_blue1-2.png', offset: {top: -231, left: 112}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/couch_blue1-3.png', offset: {top: -227, left: -140}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/couch_blue1-4.png', offset: {top: -227, left: 100}},
        },
    },
    bench_red1: {
        id: 6,
        imagePath: "assets/bench_red1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 800,
        bonus: 0.5,
        size: [1, 2],
        tier: 3,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/bench_red1-1.png', offset: {top: -256, left: 115}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/bench_red1-2.png', offset: {top: -254, left: -15}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/bench_red1-3.png', offset: {top: -256, left: 115}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/bench_red1-4.png', offset: {top: -254, left: -15}},
        }
    },
    small_bench_red1: {
        id: 7,
        imagePath: "assets/small_bench_red1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 400,
        bonus: 0.25,
        size: [1, 1],
        tier: 4,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/small_bench_red1-1.png', offset: {top: -166, left: 124}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/small_bench_red1-2.png', offset: {top: -166, left: 130}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/small_bench_red1-3.png', offset: {top: -166, left: 130}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/small_bench_red1-4.png', offset: {top: -166, left: 130}},
        },
    },
    meeting_table1: {
        id: 8,
        imagePath: "assets/meeting_table1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 3000,
        bonus: 5,
        size: [3, 6],
        tier: 9,
        images: {
            [IsoDom.ORIENTATION_NE]: {url: 'assets/meeting_table1-1.png', offset: {top: -216, left: -526}},
            [IsoDom.ORIENTATION_NW]: {url: 'assets/meeting_table1-2.png', offset: {top: -216, left: -135}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/meeting_table1-3.png', offset: {top: -216, left: -526}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/meeting_table1-4.png', offset: {top: -216, left: -135}},
        }
    },
    table_and_chairs1: {
        id: 9,
        imagePath: "assets/table_and_chairs1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 1500,
        bonus: 5,
        size: [2, 4],
        tier: 4,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/table_and_chairs1-1.png', offset: {top: -458, left: 113}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/table_and_chairs1-2.png', offset: {top: -465, left: -260}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/table_and_chairs1-3.png', offset: {top: -500, left: 34}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/table_and_chairs1-4.png', offset: {top: -510, left: -170}},
        },
    },
    watercooler1: {
        id: 10,
        imagePath: "assets/watercooler1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 250,
        bonus: 1,
        size: [1, 1],
        tier: 5,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/watercooler1-1.png', offset: {top: -292, left: 106}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/watercooler1-2.png', offset: {top: -292, left: 106}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/watercooler1-3.png', offset: {top: -292, left: 106}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/watercooler1-4.png', offset: {top: -292, left: 106}},
        },
    },
    reception_area1: {
        id: 11,
        imagePath: "assets/reception_area1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 2500,
        bonus: 3,
        size: [3, 3],
        tier: 11,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/reception_area1-1.png', offset: {top: -443, left: -117}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/reception_area1-2.png', offset: {top: -443, left: -117}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/reception_area1-3.png', offset: {top: -443, left: -117}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/reception_area1-4.png', offset: {top: -443, left: -117}},
        },
    },
    coffe_closet1: {
        id: 12,
        imagePath: "assets/coffe_closet1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 500,
        bonus: 3,
        size: [1, 1],
        tier: 2,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/coffe_closet1-1.png', offset: {top: -265, left: 90}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/coffe_closet1-2.png', offset: {top: -265, left: 66}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/coffe_closet1-3.png', offset: {top: -265, left: 90}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/coffe_closet1-4.png', offset: {top: -265, left: 66}},
        },
    },
    couch_black1: {
        id: 13,
        imagePath: "assets/couch_black1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 2000,
        bonus: 2,
        size: [1, 1],
        tier: 8,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/couch_black1-1.png', offset: {top: -272, left: 90}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/couch_black1-2.png', offset: {top: -272, left: 66}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/couch_black1-3.png', offset: {top: -272, left: 90}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/couch_black1-4.png', offset: {top: -272, left: 66}},
        }
    },
    couch_black2: {
        id: 14,
        imagePath: "assets/couch_black2-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 4000,
        bonus: 3,
        size: [1, 2],
        tier: 8,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/couch_black2-1.png', offset: {top: -308, left: 70}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/couch_black2-2.png', offset: {top: -308, left: -58}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/couch_black2-3.png', offset: {top: -308, left: 70}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/couch_black2-4.png', offset: {top: -308, left: -58}},
        },
    },
    tv_stand1: {
        id: 15,
        imagePath: "assets/tv_stand1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 1200,
        bonus: 4,
        size: [1, 2],
        tier: 8,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/tv_stand1-1.png', offset: {top: -461, left: 200}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/tv_stand1-2.png', offset: {top: -461, left: 60}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/tv_stand1-3.png', offset: {top: -461, left: 200}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/tv_stand1-4.png', offset: {top: -461, left: 60}},
        }
    },
    whiteboard2: {
        id: 16,
        imagePath: "assets/whiteboard2-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 500,
        bonus: 5,
        size: [1, 2],
        tier: 4,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/whiteboard2-1.png', offset: {top: -443, left: 142}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/whiteboard2-2.png', offset: {top: -443, left: 12}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/whiteboard2-3.png', offset: {top: -443, left: 142}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/whiteboard2-4.png', offset: {top: -443, left: 12}},
        }
    },
    glass_wall1: {
        id: 17,
        imagePath: "assets/glass_wall1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 200,
        bonus: 0.1,
        size: [1, 1],
        tier: 1,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/glass_wall1-1.png', offset: {top: -513, left: 50}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/glass_wall1-2.png', offset: {top: -513, left: 50}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/glass_wall1-3.png', offset: {top: -513, left: 50}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/glass_wall1-4.png', offset: {top: -513, left: 50}},
        },
    },
    glass_wall_corner1: {
        id: 18,
        imagePath: "assets/glass_wall_corner1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 200,
        bonus: 0.1,
        size: [1, 1],
        tier: 1,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/glass_wall_corner1-1.png', offset: {top: -569, left: 50}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/glass_wall_corner1-2.png', offset: {top: -532, left: 110}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/glass_wall_corner1-3.png', offset: {top: -499, left: 50}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/glass_wall_corner1-4.png', offset: {top: -534, left: -12}},
        },
    },
    glass_wall_t1: {
        id: 19,
        imagePath: "assets/glass_wall_t1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 200,
        bonus: 0.1,
        size: [1, 1],
        tier: 1,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/glass_wall_t1-1.png', offset: {top: -516, left: 54}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/glass_wall_t1-2.png', offset: {top: -512, left: 51}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/glass_wall_t1-3.png', offset: {top: -516, left: 54}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/glass_wall_t1-4.png', offset: {top: -512, left: 51}},
        },
    },
    glass_wall_x1: {
        id: 20,
        imagePath: "assets/glass_wall_x1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 200,
        bonus: 0.1,
        size: [1, 1],
        tier: 1,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/glass_wall_x1-1.png', offset: {top: -514, left: 50}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/glass_wall_x1-2.png', offset: {top: -514, left: 50}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/glass_wall_x1-3.png', offset: {top: -514, left: 50}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/glass_wall_x1-4.png', offset: {top: -514, left: 50}},
        }
    },
    vending_machine1: {
        id: 21,
        imagePath: "assets/vending_machine1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 800,
        bonus: 4,
        size: [1, 2],
        tier: 7,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/vending_machine1-1.png', offset: {top: -502, left: 63}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/vending_machine1-2.png', offset: {top: -499, left: -76}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/vending_machine1-3.png', offset: {top: -502, left: 63}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/vending_machine1-4.png', offset: {top: -499, left: -76}},
        }
    },
    ping_pong_table1: {
        id: 22,
        imagePath: "assets/ping_pong_table1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 700,
        bonus: 4,
        size: [2, 4],
        tier: 10,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/ping_pong_table1-1.png', offset: {top: -512, left: 52}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/ping_pong_table1-2.png', offset: {top: -512, left: -256}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/ping_pong_table1-3.png', offset: {top: -512, left: 52}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/ping_pong_table1-4.png', offset: {top: -512, left: -256}},
        },
    },
    large_coffee_machine1: {
        id: 23,
        imagePath: "assets/large_coffee_machine1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 5700,
        bonus: 9,
        size: [1, 2],
        tier: 10,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/large_coffee_machine1-1.png', offset: {top: -353, left: 121}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/large_coffee_machine1-2.png', offset: {top: -352, left: -6}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/large_coffee_machine1-3.png', offset: {top: -353, left: 121}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/large_coffee_machine1-4.png', offset: {top: -352, left: -6}},
        },
    },
    lounge_chair1: {
        id: 24,
        imagePath: "assets/lounge_chair1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 1000,
        bonus: 2,
        size: [1, 1],
        tier: 9,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/lounge_chair1-1.png', offset: {top: -260, left: 65}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/lounge_chair1-2.png', offset: {top: -260, left: 52}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/lounge_chair1-3.png', offset: {top: -283, left: 68}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/lounge_chair1-4.png', offset: {top: -292, left: 52}},
        },
    },
    wall1: {
        id: 25,
        imagePath: "assets/wall1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 200,
        bonus: 0.1,
        size: [1, 1],
        tier: 8,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/wall1-1.png', offset: {top: -513, left: 50}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/wall1-2.png', offset: {top: -513, left: 50}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/wall1-3.png', offset: {top: -513, left: 50}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/wall1-4.png', offset: {top: -513, left: 50}},
        },
    },
    wall_corner1: {
        id: 26,
        imagePath: "assets/wall_corner1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 200,
        bonus: 0.1,
        size: [1, 1],
        tier: 8,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/wall_corner1-1.png', offset: {top: -569, left: 50}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/wall_corner1-2.png', offset: {top: -532, left: 110}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/wall_corner1-3.png', offset: {top: -499, left: 50}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/wall_corner1-4.png', offset: {top: -534, left: -12}},
        },
        placementOffset: [
            {top: -569, left: 50},
            {top: -532, left: 110},
            {top: -499, left: 50},
            {top: -534, left: -12},
        ]
    },
    wall_t1: {
        id: 27,
        imagePath: "assets/wall_t1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 200,
        bonus: 0.1,
        size: [1, 1],
        tier: 8,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/wall_t1-1.png', offset: {top: -516, left: 54}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/wall_t1-2.png', offset: {top: -512, left: 51}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/wall_t1-3.png', offset: {top: -516, left: 54}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/wall_t1-4.png', offset: {top: -512, left: 51}},
        },
    },
    wall_x1: {
        id: 28,
        imagePath: "assets/wall_x1-{orientation}.png",
        orientation: IsoDom.ORIENTATION_SW,
        price: 200,
        bonus: 0.1,
        size: [1, 1],
        tier: 8,
        images: {
            [IsoDom.ORIENTATION_NW]: {url: 'assets/wall_x1-1.png', offset: {top: -514, left: 50}},
            [IsoDom.ORIENTATION_NE]: {url: 'assets/wall_x1-2.png', offset: {top: -514, left: 50}},
            [IsoDom.ORIENTATION_SE]: {url: 'assets/wall_x1-3.png', offset: {top: -514, left: 50}},
            [IsoDom.ORIENTATION_SW]: {url: 'assets/wall_x1-4.png', offset: {top: -514, left: 50}},
        }
    },
};