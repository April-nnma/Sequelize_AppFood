import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

export const userOrder = async (req, res) => {
  const { user_id, food_id, amount, code } = req.body;
  const checkOrder = await model.orders.findOne({
    where: {
      code,
    },
  });
  if (checkOrder) {
    res.send("Đơn hàng của bạn đang được thực hiện.");
  } else {
    const newData = {
      user_id,
      food_id,
      amount,
      code,
    };
    await model.orders.create(newData);
    res.send("Bạn đã đặt hàng thành công");
  }
};
