import React from "react";
import { FlatList, Text } from "react-native";
import ProfilePicture from "../ProfilePicture";
import Story from "../Story";

const data = [
    {
        imageUri: "https://scontent.flko3-1.fna.fbcdn.net/v/t31.0-8/26951815_10212973279063855_7648698212815355405_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=YsdBNN5P8w0AX8naLlH&_nc_ht=scontent.flko3-1.fna&oh=8a801de9e1cbfe53faad58ab920e3fbc&oe=5F8B3722",
        name: "Shubh"
    },
    {
        imageUri: "https://scontent.flko3-1.fna.fbcdn.net/v/t31.0-8/26951815_10212973279063855_7648698212815355405_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=YsdBNN5P8w0AX8naLlH&_nc_ht=scontent.flko3-1.fna&oh=8a801de9e1cbfe53faad58ab920e3fbc&oe=5F8B3722",
        name: "Dubey"
    },
    {
        imageUri: "https://scontent.flko3-1.fna.fbcdn.net/v/t31.0-8/26951815_10212973279063855_7648698212815355405_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=YsdBNN5P8w0AX8naLlH&_nc_ht=scontent.flko3-1.fna&oh=8a801de9e1cbfe53faad58ab920e3fbc&oe=5F8B3722",
        name: "SD"
    },
    {
        imageUri: "https://scontent.flko3-1.fna.fbcdn.net/v/t31.0-8/26951815_10212973279063855_7648698212815355405_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=YsdBNN5P8w0AX8naLlH&_nc_ht=scontent.flko3-1.fna&oh=8a801de9e1cbfe53faad58ab920e3fbc&oe=5F8B3722",
        name: "DubeySD"
    },
    {
        imageUri: "https://scontent.flko3-1.fna.fbcdn.net/v/t31.0-8/26951815_10212973279063855_7648698212815355405_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=YsdBNN5P8w0AX8naLlH&_nc_ht=scontent.flko3-1.fna&oh=8a801de9e1cbfe53faad58ab920e3fbc&oe=5F8B3722",
        name: "4"
    },
    {
        imageUri: "https://scontent.flko3-1.fna.fbcdn.net/v/t31.0-8/26951815_10212973279063855_7648698212815355405_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=YsdBNN5P8w0AX8naLlH&_nc_ht=scontent.flko3-1.fna&oh=8a801de9e1cbfe53faad58ab920e3fbc&oe=5F8B3722",
        name: "1"
    },
    {
        imageUri: "https://scontent.flko3-1.fna.fbcdn.net/v/t31.0-8/26951815_10212973279063855_7648698212815355405_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=YsdBNN5P8w0AX8naLlH&_nc_ht=scontent.flko3-1.fna&oh=8a801de9e1cbfe53faad58ab920e3fbc&oe=5F8B3722",
        name: "23"
    },
    {
        imageUri: "https://scontent.flko3-1.fna.fbcdn.net/v/t31.0-8/26951815_10212973279063855_7648698212815355405_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=YsdBNN5P8w0AX8naLlH&_nc_ht=scontent.flko3-1.fna&oh=8a801de9e1cbfe53faad58ab920e3fbc&oe=5F8B3722",
        name: "123"
    }
]

const Stories = () => {
  return (
    <FlatList 
    data={data}
    keyExtractor={({name})=>name}
    horizontal
    renderItem={({item})=> <Story imageUri={item.imageUri} name={item.name} />}
    />
  );
};

export default Stories;
