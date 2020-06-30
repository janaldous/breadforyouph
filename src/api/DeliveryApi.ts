import { DeliveryControllerApi, DeliveryDate } from "breadforyou-fetch-api";

export default class DeliveryApi {
  static getDeliveryDates(
    page: number,
    size: number
  ): Promise<Array<DeliveryDate>> {
    const deliveryApi = new DeliveryControllerApi();
    return deliveryApi.getDeliveryDatesUsingGET({ page, size });
  }
}
