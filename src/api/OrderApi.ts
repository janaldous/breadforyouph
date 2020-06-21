import { OrderDto, OrderControllerApi, OrderConfirmation } from "breadforyou-fetch-api";

export default class OrderApi {
  static postOrder(orderDto: OrderDto): Promise<OrderConfirmation> {
    const orderApi = new OrderControllerApi();
    return orderApi.orderUsingPOST({ orderDto });
  }
}
