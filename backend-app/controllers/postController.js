export const getAll = async (request, response) => {
  const posts = await PostModel
    .find().populate('user').exec()
    .then(res => res)
    .catch(error => {
      console.log(error);
      return {
        message: 'Не удалось загрузить статьи'
      };
    });

  if (posts.message) {
    return response.status(500).json(posts);
  }

  return response.json(posts);
};

export const getOne = (request, response) => {
  const postId = request.params.id;

  PostModel.findOneAndUpdate({
    _id: postId
  }, {
    $inc: {viewsCounter: 1}
  }, {
    returnDocument: 'after'
  }, (error, doc) => {
    if (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Не удалось загрузить статью'
      });
    }

    if (!doc) {
      return response.status(404).json({
        message: 'Статья не найдена'
      });
    }

    return response.json(doc);
  });
};

export const remove = (request, response) => {
  const postId = request.params.id;

  PostModel.findOneAndDelete({
    _id: postId
  }, (error, doc) => {
    if (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Не удалось удалить статью'
      });
    }

    if (!doc) {
      return response.status(404).json({
        message: 'Статья не найдена'
      });
    }

    return response.json({
      success: true
    });
  });
};

export const create = async (request, response) => {
  const {title, text, imageUrl, tags} = request.body;

  const doc = new PostModel({
    title, text, imageUrl, tags,
    user: request.userId
  });

  const post = await doc.save()
    .then(res => res)
    .catch(error => {
      console.log(error);
      return {message: 'При создание статьи возникла ошибка'};
    });

  if (post.message) {
    return response.status(500).json(post);
  }

  return response.json(post);
};

export const update = async (request, response) => {
  const postId = request.params.id;
  const {title, text, imageUrl, tags} = request.body;

  await PostModel.updateOne({
    _id: postId
  }, {
    title, text, imageUrl, tags,
    user: request.userId
  })
    .then(() => {
      return response.json({
        success: true
      });
    })
    .catch(error => {
      console.log(error);
      return response.status(500).json({
        message: 'При удаление возникла ошибка'
      });
    });
};
