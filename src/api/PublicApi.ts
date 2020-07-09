import {
    OrderDto,
    OrderConfirmation,
    PublicControllerApi,
    DeliveryDate,
  } from "breadforyou-fetch-api";
  
  export default class OrderApi {
    static postOrder(orderDto: OrderDto): Promise<OrderConfirmation> {
      const orderApi = new PublicControllerApi();
      return orderApi.orderUsingPOST({ orderDto });
    }

    static getDeliveryDates(
        page: number,
        size: number
      ): Promise<Array<DeliveryDate>> {
        const deliveryApi = new PublicControllerApi();
        return deliveryApi.getDeliveryDatesUsingGET({ page, size });
      }
  }
  