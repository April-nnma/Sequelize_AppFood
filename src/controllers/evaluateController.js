import { DATE } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

export const addEvaluate = async (req, res) => {
  const { amount, user_id, res_id } = req.body;
  let checkEvaluate = await model.rate_res.findOne({
    where: {
      user_id,
      res_id,
    },
  });
  if (checkEvaluate) {
    res.send("Bạn đã gửi đánh giá nhà hàng này trước đó.");
  } else {
    let newData = {
      user_id,
      res_id,
      amount,
      date_rate: new Date(),
    };
    await model.rate_res.create(newData);
    res.send("Đánh giá của bạn đã được hoàn tất.");
  }
};

export const getListEvaluateFromRes = async (req, res) => {
  const { resId } = req.params;
  const newResID = Number(resId);
  let listEvaluate = await model.rate_res.findAll({
    where: {
      res_id: newResID,
    },
  });
  if (listEvaluate) {
    res.send(listEvaluate);
  } else {
    res.send(
      "Hiện tại không có bất kỳ đánh giá nào được thực hiện từ nhà hàng này."
    );
  }
};

export const getListEvaluateFromUser = async (req, res) => {
  const { userId } = req.params;
  const newUserID = Number(userId);
  let listEvaluate = await model.rate_res.findAll({
    where: {
      user_id: newUserID,
    },
  });
  if (listEvaluate) {
    res.send(listEvaluate);
  } else {
    res.send("Người dùng này chưa đưa ra bất kỳ đánh giá nào.");
  }
};
