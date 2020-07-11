import { OrderDto, OrderConfirmation, DeliveryDate } from "./models";
import axios from "axios";
import {BASE_PATH} from "./runtime";

export default class OrderApi {
  static postOrder(orderDto: OrderDto): Promise<OrderConfirmation> {
    return axios.post(`${BASE_PATH}/order/`, { orderDto });
  }

  static getDeliveryDates(
    page: number,
    size: number
  ): Promise<Array<DeliveryDate>> {
    return axios.get(`${BASE_PATH}/delivery/`, { params: { page, size } });
  }
}
