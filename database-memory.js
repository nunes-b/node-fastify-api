const { randomUUID } = require("node:crypto");

class DatabaseMemory {
  #videos = new Map();

  create(video) {
    const videoID = randomUUID();
    this.#videos.set(videoID, video);
  }

  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];
        return {
          id,
          ...data,
        };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }
        return true;
      });
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}

module.exports = DatabaseMemory;
