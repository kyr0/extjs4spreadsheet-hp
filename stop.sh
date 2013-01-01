#!/bin/sh

# Stop Utopia server node
kill $(ps aux | grep '[e]4s.js' | awk '{print $2}')