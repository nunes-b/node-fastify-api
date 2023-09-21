const { randomUUID } = require("node:crypto");

class DatabaseMemory {
  #videos = new Map();

  create(video) {
    const videoID = randomUUID();
    this.#videos.set(videoID, video);
  }

  list() {
    return Array.from(this.#videos.values());
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}

module.exports = DatabaseMemory;
