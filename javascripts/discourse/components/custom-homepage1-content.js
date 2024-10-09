import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class CustomHomepageContent extends Component {
  @service router;

  get isCustomHomepage() {
    const { currentURL } = this.router;
    
    // Log the current URL to ensure you're seeing it correctly
    console.log("Current URL:", currentURL);  

    // Check for custom homepage paths
    const customPaths = ['/c/member-map/14'];  // Adjust to only match the path part, not the full domain
    
    // Return true if the current URL matches the custom paths
    return customPaths.includes(currentURL);
  }
}

