import requests
import sys
from datetime import datetime

class VetPreviewAPITester:
    def __init__(self, base_url="https://vet-preview-heredia.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if hasattr(response, 'json'):
                    try:
                        print(f"   Response: {response.json()}")
                    except:
                        print(f"   Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")

            return success, response.json() if success else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_api_health(self):
        """Test basic API health"""
        success, _ = self.run_test(
            "API Health Check",
            "GET", 
            "api/",
            200
        )
        return success

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test GET status endpoint
        get_success, _ = self.run_test(
            "Get Status Checks",
            "GET",
            "api/status", 
            200
        )
        
        # Test POST status endpoint
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        post_success, response = self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=test_data
        )
        
        return get_success and post_success

def main():
    print("🧪 Testing Veterinary Clinic Preview API")
    print("=" * 50)
    
    tester = VetPreviewAPITester()
    
    # Test API health
    if not tester.test_api_health():
        print("\n❌ API health check failed - this might affect frontend functionality")
        # Continue with tests even if health check fails
    
    # Test status endpoints
    tester.test_status_endpoints()
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Backend Tests Summary: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("✅ All backend tests passed")
        return 0
    else:
        print("⚠️  Some backend tests failed - this is a static landing page so backend issues may not affect core functionality")
        return 1

if __name__ == "__main__":
    sys.exit(main())