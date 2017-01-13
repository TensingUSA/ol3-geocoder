/**
 * @class Tensing
 */
export class Tensing {
  /**
   * @constructor
   */
  constructor(options) {

    this.settings = {
      url: options.TensingProviderURL,
      params: {
        text: ''
      }
    };
  }

  getParameters(options) {
    return {
      url: this.settings.url,
      params: {
        text: options.query
      }
    };
  }

  handleResponse(results) {
    return results.map(result => ({
      lon: result.Longitude,
      lat: result.Latitude,
      address: {
        name: result.Text || '',
        road: '',
        postcode: '',
        city: '',
        state: '',
        country: ''
      },
      original: {
        formatted: result.Text,
        details: result.Text
      }
    }));
  }
}
