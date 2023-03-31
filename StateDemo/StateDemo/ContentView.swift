//
//  ContentView.swift
//  StateDemo
//
//  Created by Andre Pham on 31/3/2023.
//

import SwiftUI

struct ContentView: View {
    @StateObject private var state = MyClass(text: "Starting Text")
    
    var body: some View {
        VStack {
            InputView(state: self.state)
            
            InputView(state: self.state)
            
            Text(self.state.text)
                .foregroundColor(.red)
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
