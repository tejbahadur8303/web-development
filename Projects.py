device_status = "active"
temperature = 100
if device_status == "active":
    if temperature > 35:
        print("High temperature alert")
    else:
        print("temperature is normal:")
else:
    print("devie is offline")
    