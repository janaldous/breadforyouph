import { OrderDto, OrderConfirmation, DeliveryDate } from "./models";
import axios, { AxiosPromise } from "axios";
import {BASE_PATH} from "./runtime";

export default class OrderApi {
  static postOrder(orderDto: OrderDto): AxiosPromise<OrderConfirmation> {
    return axios.post(`${BASE_PATH}/api/order`, { orderDto });
  }

  static getDeliveryDates(
    page: number,
    size: number
  ): AxiosPromise<Array<DeliveryDate>> {
    return axios.get(`${BASE_PATH}/api/delivery`, { params: { page, size } });
  }
}
