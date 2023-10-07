import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
let model = initModels(sequelize);

export const likeRestaurant = async (req, res) => {
  const { user_id, res_id } = req.body;
  let checkLike = await model.like_res.findOne({
    where: {
      user_id,
      res_id,
    },
  });
  if (!checkLike) {
    let newData = {
      user_id,
      res_id,
      date_like: new Date(),
    };
    await model.like_res.create(newData);
  } else {
    await model.like_res.destroy({
      where: {
        user_id,
        res_id,
      },
    });
  }
  res.send(true);
};

export const getListLikeFromRes = async (req, res) => {
  const { resId } = req.params;
  const newResId = Number(resId);
  let listLike = await model.like_res.findAll({
    where: {
      res_id: newResId,
    },
  });
  res.send(listLike);
};

export const getListLikeFromUser = async (req, res) => {
  const { userId } = req.params;
  const newUserId = Number(userId);
  let listLike = await model.like_res.findAll({
    where: {
      user_id: newUserId,
    },
  });
  res.send(listLike);
};
