<template>
  <div class="home">
    <portal to="title">Videos</portal>
    <ul class="-mx-2 p-8 flex flex-wrap ">
      <li
        v-for="video in videos"
        :key="video.id"
        class="p-2 w-1/1 md:w-1/2 lg:w-1/4"
      >
        <div class="rounded p-4 bg-white border">
          <video-preview :video="video" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import VideoPreview from "@/components/VideoPreview";

const your_key_here = "AIzaSyBUf9AexuhmOaxHSg7__1pfo1Dz4N0bFAo";

const videos = [
  {
    youtubecode: "-r98q-4zfcY"
  },
  {
    youtubecode: "X8VUt2YIJDo"
  },
  {
    youtubecode: "aQSQCDOByU4"
  },
  {
    youtubecode: "LnxpElBzasE"
  },
  {
    youtubecode: "Ve-T7fpXLQ8"
  },
  {
    youtubecode: "dG7R6iTc1lg"
  },
  {
    youtubecode: "ax8XEVZufFM"
  },
  {
    youtubecode: "fXA0d2bhJvM"
  },
  {
    youtubecode: "amTG4sGbXsk"
  },
  {
    youtubecode: "Lf1n1NWRPJg"
  },
  {
    youtubecode: "9Qwy57A16WE"
  },
  {
    youtubecode: "JrjbX-KX6wQ"
  },
  {
    youtubecode: "qNYKMdA1M2Q"
  },
  {
    youtubecode: "yK1vIqm11nQ"
  },
  {
    youtubecode: "JxkrT9FrrSY"
  },
  {
    youtubecode: "dS6pvT8AX1Q"
  },
  {
    youtubecode: "edc2Zq9-eDI"
  },
  {
    youtubecode: "C68QOHlEpRY"
  },
  {
    youtubecode: "E2lJoVD0Wec"
  },
  {
    youtubecode: "sTI7THECfak"
  },
  {
    youtubecode: "ixFhHIXDQMg&t"
  },
  {
    youtubecode: "VYZpUoSBjnY"
  },
  {
    youtubecode: "sVOMDnPsrUE"
  },
  {
    youtubecode: "U4sZAfSCo6c"
  },
  {
    youtubecode: "tctZNJcGVs8"
  },
  {
    youtubecode: "ajoqB2wKUpI"
  },
  {
    youtubecode: "H1Z_FXUXOIM"
  },
  {
    youtubecode: "WPcvXXadQZw"
  },
  {
    youtubecode: "VW71Uu-Usso"
  },
  {
    youtubecode: "Vmt9URmCxro"
  },
  {
    youtubecode: "SEPUgQyqj-8"
  },
  {
    youtubecode: "iKnKg1b53Os"
  },
  {
    youtubecode: "9bJz4MciUcc"
  },
  {
    youtubecode: "ChznkkCp1oc"
  },
  {
    youtubecode: "SnPNjTxZNIk"
  },
  {
    youtubecode: "flvj3-r67I0"
  },
  {
    youtubecode: "MxSHwiJV4Ls"
  },
  {
    youtubecode: "3EFZ0ppBWMI"
  },
  {
    youtubecode: "XkmV3m6H1nA"
  },
  {
    youtubecode: "ITfsCf0p1Fs"
  },
  {
    youtubecode: "TSO1SIeWcFU"
  },
  {
    youtubecode: "3hHqb_F976A"
  },
  {
    youtubecode: "9UamQbMSXRw"
  },
  {
    youtubecode: "vNwM6PsOlV8"
  },
  {
    youtubecode: "C1y7ZXITkTM"
  },
  {
    youtubecode: "eWIPxn02uOY"
  },
  {
    youtubecode: "Sg-2Z3FgzOw"
  },
  {
    youtubecode: "nw7TwFmIMY8"
  },
  {
    youtubecode: "U32qHzFio6E"
  },
  {
    youtubecode: "hNl1qHZfcrI"
  },
  {
    youtubecode: "4txRVmlGmGE"
  },
  {
    youtubecode: "pWTeleTzfRA"
  }
];

export default {
  data() {
    return {
      videos: []
    };
  },
  components: {
    VideoPreview
  },
  computed: {
    videoIds() {
      return videos
        .filter(x => x.youtubecode)
        .map(x => x.youtubecode)
        .join(",");
    }
  },
  methods: {
    async getVideos() {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${this.videoIds}&key=${your_key_here}&maxResults=50`
      );
      const json = await response.json();
      return json.items;
    }
  },
  async mounted() {
    const videos = await this.getVideos();
    this.videos = videos.map(video => {
      return {
        id: video.id,
        image: video.snippet.thumbnails.standard,
        title: video.snippet.title
      };
    });
  }
};
</script>
